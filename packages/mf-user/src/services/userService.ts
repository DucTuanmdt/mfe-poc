import { objectToQueryString } from "@/utils/formatUtils";
import { ApiService } from ".";
import { IFUser, IFUserSearchCriteria, IFUserSearchParams } from "@/model/userModel";

const userBaseUrl = process.env.USER_API_BASE_URL as string;

const userService = new ApiService(userBaseUrl);



// Define a mapping object that maps the criteria fields to the search params fields
const criteriaToSearchParamsMapping: { [key in keyof IFUserSearchCriteria]?: keyof IFUserSearchParams } = {
  page: '_page',
  pageSize: '_limit',
  sort: '_sort',
};

// convert IFUserSearchCriteria to IFUserSearchParams
function convertCriteriaToSearchParams(criteria: IFUserSearchCriteria): IFUserSearchParams {
  const searchParams: IFUserSearchParams = {};

  for (const key in criteria) {
      const searchParamKey = criteriaToSearchParamsMapping[key as keyof IFUserSearchCriteria];
      if (searchParamKey) {
          searchParams[searchParamKey] = criteria[key as keyof IFUserSearchCriteria] as never;
      }
  }

  return searchParams;
}

export async function searchUsers(searchCriteria: IFUserSearchCriteria) {
  const params = convertCriteriaToSearchParams(searchCriteria)
  const query = objectToQueryString(params);
  const { data, error } = await userService.get(`/users?${query}`);

  if (error) {
    throw new Error(error.message);
  }

  return data as IFUser[];
}
