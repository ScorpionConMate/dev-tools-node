/* eslint-disable @typescript-eslint/no-explicit-any */
export class ResponseGeneric {
    public status: number;
    public success: boolean;
    public data?: Record<string, any>;
    public error?: Record<string, any>;

    constructor({ status, success, data, error }: ResponseInterface) {
        this.status = status;
        this.success = success;
        this.data = data;
        this.error = error;
    }
}

interface ResponseInterface {
    status: number;
    success: boolean;
    data?: Record<string, any>;
    error?: Record<string, any>;
}
