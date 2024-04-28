/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWorkbookNamedItemFromDiscriminatorValue, serializeWorkbookNamedItem, type WorkbookNamedItem } from '../../../../../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../../../models/oDataErrors/';
// @ts-ignore
import { RangeRequestBuilderRequestsMetadata, type RangeRequestBuilder } from './range/';
// @ts-ignore
import { type WorksheetRequestBuilder, WorksheetRequestBuilderRequestsMetadata } from './worksheet/';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the names property of the microsoft.graph.workbookWorksheet entity.
 */
export interface WorkbookNamedItemItemRequestBuilder extends BaseRequestBuilder<WorkbookNamedItemItemRequestBuilder> {
    /**
     * Provides operations to call the range method.
     */
    get range(): RangeRequestBuilder;
    /**
     * Provides operations to manage the worksheet property of the microsoft.graph.workbookNamedItem entity.
     */
    get worksheet(): WorksheetRequestBuilder;
    /**
     * Delete navigation property names for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Returns collection of names that are associated with the worksheet. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookNamedItem>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<WorkbookNamedItemItemRequestBuilderGetQueryParameters> | undefined) : Promise<WorkbookNamedItem | undefined>;
    /**
     * Update the navigation property names in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookNamedItem>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: WorkbookNamedItem, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookNamedItem | undefined>;
    /**
     * Delete navigation property names for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Returns collection of names that are associated with the worksheet. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<WorkbookNamedItemItemRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property names in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: WorkbookNamedItem, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Returns collection of names that are associated with the worksheet. Read-only.
 */
export interface WorkbookNamedItemItemRequestBuilderGetQueryParameters {
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
export const WorkbookNamedItemItemRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/names/{workbookNamedItem%2Did}{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const WorkbookNamedItemItemRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const WorkbookNamedItemItemRequestBuilderNavigationMetadata: Record<Exclude<keyof WorkbookNamedItemItemRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    range: {
        requestsMetadata: RangeRequestBuilderRequestsMetadata,
    },
    worksheet: {
        requestsMetadata: WorksheetRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const WorkbookNamedItemItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: WorkbookNamedItemItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: WorkbookNamedItemItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookNamedItemFromDiscriminatorValue,
        queryParametersMapper: WorkbookNamedItemItemRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: WorkbookNamedItemItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookNamedItemFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeWorkbookNamedItem,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
