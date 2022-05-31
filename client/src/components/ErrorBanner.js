import React from 'react'

const ErrorBanner = ({message}) => {
	const errorMessage = message || "에러입니다.";

	return <div data-testid="error-banner">{errorMessage}</div>;
}

export default ErrorBanner