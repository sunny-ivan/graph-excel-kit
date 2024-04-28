/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWorkbookChartGridlinesFromDiscriminatorValue, serializeWorkbookChartGridlines, type WorkbookChartGridlines } from '../../../../../../../../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../../../../../../models/oDataErrors/';
// @ts-ignore
import { FormatRequestBuilderNavigationMetadata, FormatRequestBuilderRequestsMetadata, type FormatRequestBuilder } from './format/';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the minorGridlines property of the microsoft.graph.workbookChartAxis entity.
 */
export interface MinorGridlinesRequestBuilder extends BaseRequestBuilder<MinorGridlinesRequestBuilder> {
    /**
     * Provides operations to manage the format property of the microsoft.graph.workbookChartGridlines entity.
     */
    get format(): FormatRequestBuilder;
    /**
     * Delete navigation property minorGridlines for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     delete(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Returns a Gridlines object that represents the minor gridlines for the specified axis. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookChartGridlines>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<MinorGridlinesRequestBuilderGetQueryParameters> | undefined) : Promise<WorkbookChartGridlines | undefined>;
    /**
     * Update the navigation property minorGridlines in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookChartGridlines>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     patch(body: WorkbookChartGridlines, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookChartGridlines | undefined>;
    /**
     * Delete navigation property minorGridlines for drives
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Returns a Gridlines object that represents the minor gridlines for the specified axis. Read-only.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<MinorGridlinesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update the navigation property minorGridlines in drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPatchRequestInformation(body: WorkbookChartGridlines, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Returns a Gridlines object that represents the minor gridlines for the specified axis. Read-only.
 */
export interface MinorGridlinesRequestBuilderGetQueryParameters {
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
export const MinorGridlinesRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/charts/{workbookChart%2Did}/axes/categoryAxis/minorGridlines{?%24expand,%24select}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const MinorGridlinesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "expand": "%24expand",
    "select": "%24select",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const MinorGridlinesRequestBuilderNavigationMetadata: Record<Exclude<keyof MinorGridlinesRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    format: {
        requestsMetadata: FormatRequestBuilderRequestsMetadata,
        navigationMetadata: FormatRequestBuilderNavigationMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const MinorGridlinesRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        uriTemplate: MinorGridlinesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendNoResponseContent",
    },
    get: {
        uriTemplate: MinorGridlinesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookChartGridlinesFromDiscriminatorValue,
        queryParametersMapper: MinorGridlinesRequestBuilderGetQueryParametersMapper,
    },
    patch: {
        uriTemplate: MinorGridlinesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookChartGridlinesFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeWorkbookChartGridlines,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
