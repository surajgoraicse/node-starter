class ApiError extends Error {
	success = false;
	data: Record<string, any> | null = null;

	constructor(
		public message: string = "Something went wrong",
		public statusCode: number,
		public errors: Error | string | string[] = []
	) {
		super(message);
		// Capture stack trace at the point where an object is created from this class
		if (!this.stack) {
			Error.captureStackTrace(this, this.constructor);
		}
	}
}

export default ApiError;
