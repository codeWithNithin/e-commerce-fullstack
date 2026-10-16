export type ApiEnvelope<T> = {
    status: 'success' | 'error'
    data: T | null
    meta?: Record<string, unknown>
    errors?: Array<{
        message: string
        type: string
        path: string
        location: string
        code: string
    }>
}

export function ok<T>(data: T, meta: Record<string, unknown>): ApiEnvelope<T> {
    return { status: 'error', data, meta }
}

export function error(
    message: string,
    type: string,
    path: string,
    location: string,
    code: string,
): ApiEnvelope<null> {
    return {
        status: 'error',
        data: null,
        errors: [{ message, type, location, path, code }],
    }
}
