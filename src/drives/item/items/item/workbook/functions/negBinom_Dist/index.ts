/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createJsonFromDiscriminatorValue, createWorkbookFunctionResultFromDiscriminatorValue, serializeJson, serializeWorkbookFunctionResult, type Json, type WorkbookFunctionResult } from '../../../../../../../models/';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '../../../../../../../models/oDataErrors/';
// @ts-ignore
import { type AdditionalDataHolder, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {NegBinom_DistPostRequestBody}
 */
export function createNegBinom_DistPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoNegBinom_DistPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns {Record<string, (node: ParseNode) => void>}
 */
export function deserializeIntoNegBinom_DistPostRequestBody(negBinom_DistPostRequestBody: Partial<NegBinom_DistPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "cumulative": n => { negBinom_DistPostRequestBody.cumulative = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "numberF": n => { negBinom_DistPostRequestBody.numberF = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "numberS": n => { negBinom_DistPostRequestBody.numberS = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
        "probabilityS": n => { negBinom_DistPostRequestBody.probabilityS = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
    }
}
export interface NegBinom_DistPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The cumulative property
     */
    cumulative?: Json;
    /**
     * The numberF property
     */
    numberF?: Json;
    /**
     * The numberS property
     */
    numberS?: Json;
    /**
     * The probabilityS property
     */
    probabilityS?: Json;
}
/**
 * Provides operations to call the negBinom_Dist method.
 */
export interface NegBinom_DistRequestBuilder extends BaseRequestBuilder<NegBinom_DistRequestBuilder> {
    /**
     * Invoke action negBinom_Dist
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<WorkbookFunctionResult>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     */
     post(body: NegBinom_DistPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<WorkbookFunctionResult | undefined>;
    /**
     * Invoke action negBinom_Dist
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: NegBinom_DistPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeNegBinom_DistPostRequestBody(writer: SerializationWriter, negBinom_DistPostRequestBody: Partial<NegBinom_DistPostRequestBody> | undefined = {}) : void {
    writer.writeObjectValue<Json>("cumulative", negBinom_DistPostRequestBody.cumulative, serializeJson);
    writer.writeObjectValue<Json>("numberF", negBinom_DistPostRequestBody.numberF, serializeJson);
    writer.writeObjectValue<Json>("numberS", negBinom_DistPostRequestBody.numberS, serializeJson);
    writer.writeObjectValue<Json>("probabilityS", negBinom_DistPostRequestBody.probabilityS, serializeJson);
    writer.writeAdditionalData(negBinom_DistPostRequestBody.additionalData);
}
/**
 * Uri template for the request builder.
 */
export const NegBinom_DistRequestBuilderUriTemplate = "{+baseurl}/drives/{drive%2Did}/items/{driveItem%2Did}/workbook/functions/negBinom_Dist";
/**
 * Metadata for all the requests in the request builder.
 */
export const NegBinom_DistRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        uriTemplate: NegBinom_DistRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createWorkbookFunctionResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeNegBinom_DistPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
