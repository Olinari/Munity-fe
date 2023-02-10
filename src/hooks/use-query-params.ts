import _ from "lodash";
import { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { alphabeticalSort } from "@/utils/string-utils";
import _qs from "qs";

export function useQueryParams(defaultOptions = {}) {
  const navigate = useNavigate();
  const { search } = useLocation();
  return {
    queryParams: useMemo(() => qs.parse(search), [search]),
    updateQueryParams(params, { recursive } = defaultOptions) {
      const currentParams = qs.parse(window.location.search);
      const newQueryParams = _.omitBy(
        recursive
          ? _.merge({}, currentParams, params)
          : _.assign({}, currentParams, params),
        (value) => (_.isObjectLike(value) ? _.isEmpty(value) : _.isNil(value))
      );
      if (
        qs.stringify(currentParams, { sort: alphabeticalSort }) !==
        qs.stringify(newQueryParams, { sort: alphabeticalSort })
      ) {
        navigate(makeUrl(window.location.pathname, newQueryParams));
      }
    },
  };
}

export function makeUrl(pathname, query) {
  const queryString = _.isObject(query) ? qs.stringify(query) : query;
  return queryString ? `${pathname}?${queryString}` : pathname;
}

export const qs = {
  stringify: (object, options) =>
    _qs.stringify(object, { skipNulls: true, ...options }),
  parse: (string, options) =>
    _qs.parse(string, { ignoreQueryPrefix: true, arrayLimit: 50, ...options }),
};
