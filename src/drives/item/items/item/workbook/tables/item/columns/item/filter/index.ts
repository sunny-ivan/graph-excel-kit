/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWorkbookFilterFromDiscriminatorValue, serializeWorkbookFilter, type WorkbookFilter } from '../../../../../../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../../../../models/oDataErrors/';
// @ts-ignore
import { ApplyRequestBuilderRequestsMetadata, type ApplyRequestBuilder } from './apply/';
// @ts-ignore
import { ApplyBottomItemsFilterRequestBuilderRequestsMetadata, type ApplyBottomItemsFilterRequestBuilder } from './applyBottomItemsFilter/';
// @ts-ignore
import { ApplyBottomPercentFilterRequestBuilderRequestsMetadata, type ApplyBottomPercentFilterRequestBuilder } from './applyBottomPercentFilter/';
// @ts-ignore
import { ApplyCellColorFilterRequestBuilderRequestsMetadata, type ApplyCellColorFilterRequestBuilder } from './applyCellColorFilter/';
// @ts-ignore
import { ApplyCustomFilterRequestBuilderRequestsMetadata, type ApplyCustomFilterRequestBuilder } from './applyCustomFilter/';
// @ts-ignore
import { ApplyDynamicFilterRequestBuilderRequestsMetadata, type ApplyDynamicFilterRequestBuilder } from './applyDynamicFilter/';
// @ts-ignore
import { ApplyFontColorFilterRequestBuilderRequestsMetadata, type ApplyFontColorFilterRequestBuilder } from './applyFontColorFilter/';
// @ts-ignore
import { ApplyIconFilterRequestBuilderRequestsMetadata, type ApplyIconFilterRequestBuilder } from './applyIconFilter/';
// @ts-ignore
import { ApplyTopItemsFilterRequestBuilderRequestsMetadata, type ApplyTopItemsFilterRequestBuilder } from './applyTopItemsFilter/';
// @ts-ignore
import { ApplyTopPercentFilterRequestBuilderRequestsMetadata, type ApplyTopPercentFilterRequestBuilder } from './applyTopPercentFilter/';
// @ts-ignore
import { ApplyValuesFilterRequestBuilderRequestsMetadata, type ApplyValuesFilterRequestBuilder } from './applyValuesFilter/';
// @ts-ignore
import { ClearRequestBuilderRequestsMetadata, type ClearRequestBuilder } from './clear/';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the filter property of the microsoft.graph.workbookTableColumn entity.
 */
export interface FilterRequestBuilder extends BaseRequestBuilder<FilterRequestBuilder> {
    /**
     * Provides operations to call the apply method.
     */
    get apply(): ApplyRequestBuilder;
    /**
     * Provides operations to call the applyBottomItemsFilter method.
     */
    get applyBottomItemsFilter(): ApplyBottomItemsFilterRequestBuilder;
    /**
     * Provides operations to call the applyBottomPercentFilter method.
     */
    get applyBottomPercentFilter(): ApplyBottomPercentFilterRequestBuilder;
    /**
     * Provides operations to call the applyCellColorFilter method.
     */
    get applyCellColorFilter(): ApplyCellColorFilterRequestBuilder;
    /**
     * Provides operations to call the applyCustomFilter method.
     */
    get applyCustomFilter(): ApplyCustomFilterRequestBuilder;
    /**
     * Provides operations to call the applyDynamicFilter method.
     */
    get applyDynamicFilter(): ApplyDynamicFilterRequestBuilder;
    /**
     * Provides operations to call the applyFontColorFilter method.
     */
    get applyFontColorFilter(): ApplyFontColorFilterRequestBuilder;
    /**
     * Provides operations to call the applyIconFilter method.
     */
    get applyIconFilter(): ApplyIconFilterRequestBuilder;
    /**
     * Provides operations to call the applyTopItemsFilter method.
     */
    get applyTopItemsFilter(): ApplyTopItemsFilterRequestBuilder;
    /**
     * Provides operations to call the applyTopPercentFilter method.
     */
    get applyTopPercentFilter(): ApplyTopPercentFilterRequestBuilder;
    /**
     * Provides operations to call the applyValuesFilter method.
     */
    get applyValuesFilter(): ApplyValuesFilterRequestBuilder;
    /**
     * Provides operations to call the clear method.
     */
    get clear(): ClearRequestBuilder;
    /**
     * Delete navigation property filter for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Retrieve the filter applied to the column. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFilter>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<FilterRequestBuilderGetQueryParameters> | undefined) : Promise<WorkbookFilter | undefined>;
    /**
     * Update the navigation property filter in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFilter>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: WorkbookFilter, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFilter | undefined>;
    /**
     * Delete navigation property filter for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Retrieve the filter applied to the column. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<FilterRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property filter in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: WorkbookFilter, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Retrieve the filter applied to the column. Read-only.
 */
export interface FilterRequestBuilderGetQueryParameters {
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Select properties to be returned
     */
    select?: string[];
}
/**
 * Uri template for the request builder.
 */
export const FilterRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/tables/{workbookTable%2Did}/columns/{workbookTableColumn%2Did}/filter{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const FilterRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const FilterRequestBuilderNavigationMetadata: Record<Exclude<keyof FilterRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    apply: {
        requestsMetadata: ApplyRequestBuilderRequestsMetadata,
    },
    applyBottomItemsFilter: {
        requestsMetadata: ApplyBottomItemsFilterRequestBuilderRequestsMetadata,
    },
    applyBottomPercentFilter: {
        requestsMetadata: ApplyBottomPercentFilterRequestBuilderRequestsMetadata,
    },
    applyCellColorFilter: {
        requestsMetadata: ApplyCellColorFilterRequestBuilderRequestsMetadata,
    },
    applyCustomFilter: {
        requestsMetadata: ApplyCustomFilterRequestBuilderRequestsMetadata,
    },
    applyDynamicFilter: {
        requestsMetadata: ApplyDynamicFilterRequestBuilderRequestsMetadata,
    },
    applyFontColorFilter: {
        requestsMetadata: ApplyFontColorFilterRequestBuilderRequestsMetadata,
    },
    applyIconFilter: {
        requestsMetadata: ApplyIconFilterRequestBuilderRequestsMetadata,
    },
    applyTopItemsFilter: {
        requestsMetadata: ApplyTopItemsFilterRequestBuilderRequestsMetadata,
    },
    applyTopPercentFilter: {
        requestsMetadata: ApplyTopPercentFilterRequestBuilderRequestsMetadata,
    },
    applyValuesFilter: {
        requestsMetadata: ApplyValuesFilterRequestBuilderRequestsMetadata,
    },
    clear: {
        requestsMetadata: ClearRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const FilterRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: FilterRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: FilterRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFilterFromDiscriminatorValue,
        queryParametersMapper: FilterRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: FilterRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFilterFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeWorkbookFilter,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */