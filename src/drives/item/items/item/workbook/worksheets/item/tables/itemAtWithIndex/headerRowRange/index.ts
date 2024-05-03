/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWorkbookRangeFromDiscriminatorValue, type WorkbookRange } from '../../../../../../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../../../../models/oDataErrors/';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to call the headerRowRange method.
 */
export interface HeaderRowRangeRequestBuilder extends BaseRequestBuilder<HeaderRowRangeRequestBuilder> {
    /**
     * Gets the range object associated with header row of the table.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookRange>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/table-headerrowrange?view=graph-rest-1.0|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookRange | undefined>;
    /**
     * Gets the range object associated with header row of the table.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const HeaderRowRangeRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/worksheets/{workbookWorksheet%2Did}/tables/itemAt(index={index})/headerRowRange()";
/**
 * Metadata for all the requests in the request builder.
 */
export const HeaderRowRangeRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: HeaderRowRangeRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookRangeFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
