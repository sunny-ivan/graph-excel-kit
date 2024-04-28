/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWorkbookChartSeriesFromDiscriminatorValue, type WorkbookChartSeries } from '../../../../../../../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../../../../../models/oDataErrors/';
// @ts-ignore
import { FormatRequestBuilderRequestsMetadata, type FormatRequestBuilder } from './format/';
// @ts-ignore
import { PointsRequestBuilderRequestsMetadata, type PointsRequestBuilder } from './points/';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the itemAt method.
 */
export interface ItemAtWithIndexRequestBuilder extends BaseRequestBuilder<ItemAtWithIndexRequestBuilder> {
    /**
     * Provides operations to manage the format property of the microsoft.graph.workbookChartSeries entity.
     */
    get format(): FormatRequestBuilder;
    /**
     * Provides operations to manage the points property of the microsoft.graph.workbookChartSeries entity.
     */
    get points(): PointsRequestBuilder;
    /**
     * Retrieves a series based on its position in the collection
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookChartSeries>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/chartseriescollection-itemat?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookChartSeries | undefined>;
    /**
     * Retrieves a series based on its position in the collection
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const ItemAtWithIndexRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/charts/{workbookChart%2Did}/series/itemAt(index={index})";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ItemAtWithIndexRequestBuilderNavigationMetadata: Record<Exclude<keyof ItemAtWithIndexRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    format: {
        requestsMetadata: FormatRequestBuilderRequestsMetadata,
    },
    points: {
        requestsMetadata: PointsRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const ItemAtWithIndexRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: ItemAtWithIndexRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookChartSeriesFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
