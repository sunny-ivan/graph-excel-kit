/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWorkbookCommentCollectionResponseFromDiscriminatorValue, createWorkbookCommentFromDiscriminatorValue, serializeWorkbookComment, type WorkbookComment, type WorkbookCommentCollectionResponse } from '../../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../models/oDataErrors/';
// @ts-ignore
import { CountRequestBuilderRequestsMetadata, type CountRequestBuilder } from './count/';
// @ts-ignore
import { type WorkbookCommentItemRequestBuilder, WorkbookCommentItemRequestBuilderNavigationMetadata, WorkbookCommentItemRequestBuilderRequestsMetadata } from './item/';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Provides operations to manage the comments property of the microsoft.graph.workbook entity.
 */
export interface CommentsRequestBuilder extends BaseRequestBuilder<CommentsRequestBuilder> {
    /**
     * Provides operations to count the resources in the collection.
     */
    get count(): CountRequestBuilder;
    /**
     * Provides operations to manage the comments property of the microsoft.graph.workbook entity.
     * @param workbookCommentId The unique identifier of workbookComment
     * @returns {WorkbookCommentItemRequestBuilder}
     */
     byWorkbookCommentId(workbookCommentId: string) : WorkbookCommentItemRequestBuilder;
    /**
     * Represents a collection of comments in a workbook.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookCommentCollectionResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     get(requestConfiguration?: RequestConfiguration<CommentsRequestBuilderGetQueryParameters> | undefined) : Promise<WorkbookCommentCollectionResponse | undefined>;
    /**
     * Create new navigation property to comments for drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookComment>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: WorkbookComment, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookComment | undefined>;
    /**
     * Represents a collection of comments in a workbook.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<CommentsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create new navigation property to comments for drives
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: WorkbookComment, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Represents a collection of comments in a workbook.
 */
export interface CommentsRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Uri template for the request builder.
 */
export const CommentsRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/comments{?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const CommentsRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const CommentsRequestBuilderNavigationMetadata: Record<Exclude<keyof CommentsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byWorkbookCommentId: {
        requestsMetadata: WorkbookCommentItemRequestBuilderRequestsMetadata,
        navigationMetadata: WorkbookCommentItemRequestBuilderNavigationMetadata,
        pathParametersMappings: ["workbookComment%2Did"],
    },
    count: {
        requestsMetadata: CountRequestBuilderRequestsMetadata,
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const CommentsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: CommentsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookCommentCollectionResponseFromDiscriminatorValue,
        queryParametersMapper: CommentsRequestBuilderGetQueryParametersMapper,
    },
    post: {
        uriTemplate: CommentsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookCommentFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeWorkbookComment,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
