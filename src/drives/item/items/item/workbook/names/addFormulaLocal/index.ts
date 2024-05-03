/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createWorkbookNamedItemFromDiscriminatorValue, serializeWorkbookNamedItem, type WorkbookNamedItem } from '../../../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../models/oDataErrors/';
// @ts-ignore
import { type AdditionalDataHolder, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

export interface AddFormulaLocalPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The comment property
     */
    comment?: string;
    /**
     * The formula property
     */
    formula?: string;
    /**
     * The name property
     */
    name?: string;
}
/**
 * Provides operations to call the addFormulaLocal method.
 */
export interface AddFormulaLocalRequestBuilder extends BaseRequestBuilder<AddFormulaLocalRequestBuilder> {
    /**
     * Adds a new name to the collection of the given scope using the user's locale for the formula.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookNamedItem>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @see {@link https://learn.microsoft.com/graph/api/nameditem-addformulalocal?view=graph-rest-1.0|Find more info here}
     */
     post(body: AddFormulaLocalPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookNamedItem | undefined>;
    /**
     * Adds a new name to the collection of the given scope using the user's locale for the formula.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: AddFormulaLocalPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {AddFormulaLocalPostRequestBody}
 */
export function createAddFormulaLocalPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoAddFormulaLocalPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoAddFormulaLocalPostRequestBody(addFormulaLocalPostRequestBody: Partial<AddFormulaLocalPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "comment": n => { addFormulaLocalPostRequestBody.comment = n.getStringValue(); },
        "formula": n => { addFormulaLocalPostRequestBody.formula = n.getStringValue(); },
        "name": n => { addFormulaLocalPostRequestBody.name = n.getStringValue(); },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeAddFormulaLocalPostRequestBody(writer: SerializationWriter, addFormulaLocalPostRequestBody: Partial<AddFormulaLocalPostRequestBody> | undefined = {}) : void {
    writer.writeStringValue("comment", addFormulaLocalPostRequestBody.comment);
    writer.writeStringValue("formula", addFormulaLocalPostRequestBody.formula);
    writer.writeStringValue("name", addFormulaLocalPostRequestBody.name);
    writer.writeAdditionalData(addFormulaLocalPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const AddFormulaLocalRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/names/addFormulaLocal";
/**
 * Metadata for all the requests in the request builder.
 */
export const AddFormulaLocalRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: AddFormulaLocalRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookNamedItemFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeAddFormulaLocalPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
