export type ExceptionMessage = {
    type: string;
    title: string;
    status: number;
    detail: string;
    traceId: string;
    errors: Record<string, string[]>;
};

export type ResponseException = {
    exceptionMessage: ExceptionMessage;
};

export type ApiVersionModel = {
    assemblyVersion: string;
    assemblyFileVersion: string;
    assemblyInformationalVersion: string;
    assemblyName: string;
    assemblyTitle: string;
    assemblyConfiguration: string;
    rootNamespace: string;
};

export type ApiVersionResponse = {
    message: string;
    result: ApiVersionModel;
    isError: boolean;
    responseException: ResponseException;
};

export type SurveyResponse = {
    message: string;
    result: SurveyModel;
    isError: boolean;
    responseException: ResponseException;
};

export type UserResponse = {
    message: string;
    result: UserModel;
    isError: boolean;
    responseException: ResponseException;
};

export type IsUserRegisteredResponse = {
    message: string;
    result: boolean;
    isError: boolean;
    responseException: ResponseException;
};

export type UserModel = {
    id: number;
    displayName: string;
    emailAddress: string;
    externalUserId: string;
};

export type SurveyModel = {
    id: number;
    topic: string;
    respondentType: string;
    numberOfRespondents: number;
    createdOn: Date;
    options: SurveyOptionModel[];
};

export type SurveyOptionModel = {
    id: number;
    optionText: string;
    numberOfVotes: number;
    preferredNumberOfVotes: number;
};

export type CreateSurveyCommand = {
    surveyTopic: string;
    numberOfRespondents: number;
    respondentType: string;
    surveyOptions: SurveyOptionDto[];
};

export type SurveyOptionDto = {
    optionText: string;
    preferredNumberOfVotes: number;
};
