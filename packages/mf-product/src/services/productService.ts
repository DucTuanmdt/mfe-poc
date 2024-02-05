import { objectToQueryString } from "@/utils/formatUtils";
import { ApiService } from ".";
import { IFProduct, IFProductSearchCriteria, IFProductSearchParams } from "@/model/productModel";

const productBaseUrl = process.env.PRODUCT_BASE_URL as string;

const productService = new ApiService(productBaseUrl);



// Define a mapping object that maps the criteria fields to the search params fields
const criteriaToSearchParamsMapping: { [key in keyof IFProductSearchCriteria]?: keyof IFProductSearchParams } = {
  page: '_page',
  pageSize: '_limit',
  sort: '_sort',
};

// convert IFProductSearchCriteria to IFProductSearchParams
function convertCriteriaToSearchParams(criteria: IFProductSearchCriteria): IFProductSearchParams {
  const searchParams: IFProductSearchParams = {};

  for (const key in criteria) {
      const searchParamKey = criteriaToSearchParamsMapping[key as keyof IFProductSearchCriteria];
      if (searchParamKey) {
          searchParams[searchParamKey] = criteria[key as keyof IFProductSearchCriteria] as never;
      }
  }

  return searchParams;
}

export async function searchProducts(searchCriteria: IFProductSearchCriteria) {
  const params = convertCriteriaToSearchParams(searchCriteria)
  const query = objectToQueryString(params);
  const { data, error } = await productService.get(`/products?${query}`);

  if (error) {
    throw new Error(error.message);
  }

  return data as IFProduct[];
}
