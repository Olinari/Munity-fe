import { useEffect, useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getAgentAuthData, secureConnection } from "../../services/whatsapp";

import Page from "../../components/page";

export default () => {
  const [stage, setStage] = useState(0);
  const [onboardingData, setonboardingData] = useState(null);

  const { data: authData, isLoading } = useQuery("authData", getAgentAuthData);
  const [connectionSuccess, setSuccess] = useState(false);

  const verifyConneciton = async () => {
    try {
      const data = await secureConnection();
      console.log(data);
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (authData) {
      const intervalId = setInterval(() => {
        verifyConneciton().then((data) => {
          if (data?.connected) {
            clearInterval(intervalId);
            setSuccess(true);
          }
        });
      }, 700);
    }
  }, [authData, isLoading]);

  return (
    <Page>
      <ContentContainer>
        {connectionSuccess ? (
          "Success!"
        ) : (
          <>
            {isLoading ? (
              "loading..."
            ) : (
              <>
                <Description>
                  Scan This Qr code using whatsapp (Link a device) on the agent
                  device👁 you would like to track
                </Description>
                <Qr>{authData.qr}</Qr>
              </>
            )}
          </>
        )}
      </ContentContainer>
    </Page>
  );
};

const ContentContainer = styled.div`
  white-space: pre-wrap;
  line-height: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Qr = styled.div`
  font-family: "menlo";
  margin-top: 24px;
  font-size: 10px;
  transform: scaleY(1.2);
`;

const Description = styled.p`
  padding: 28px;
`;
