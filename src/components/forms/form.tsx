import { forwardRef, HTMLProps } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useSplitProps } from '@/hooks/use-split-props';

const FormProperties = [
  'mode',
  'reValidateMode',
  'defaultValues',
  'resolver',
  'context',
  'criteriaMode',
  'shouldFocusError',
  'shouldUnregister',
  'shouldUseNativeValidation',
  'delayError',
];

export const FormControl = forwardRef<
  HTMLFormElement,
  HTMLProps<HTMLFormElement> & { defaultValues?: any; onSubmit: any; onError?: () => void }
>(({ onSubmit, onError, ...props }) => {
  const [formProps] = useSplitProps(props, FormProperties);
  const { handleSubmit, ...methods } = useForm(formProps);

  return (
    <FormProvider handleSubmit={handleSubmit} {...methods}>
      <form {...props} onSubmit={handleSubmit(onSubmit, onError as any)} />
    </FormProvider>
  );
});
