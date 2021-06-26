export class ResponseGeneric {

    public status: number;
    public success: boolean;
    public data?: object;
    public error?: object;

    constructor({ status, success, data, error }: ResponseInterface) {
        this.status = status;
        this.success = success;
        this.data = data;
        this.error = error;
    }
}

interface ResponseInterface {
    status: number
    success: boolean
    data?: object
    error?: object
}
