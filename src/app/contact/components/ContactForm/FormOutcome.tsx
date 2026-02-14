import React from "react";

export function SuccessMessage() {
  return (
    <div className='bg-success-50 dark:bg-success-900/20 border border-success-200 dark:border-success-700 rounded-lg p-6 text-center'>
      <svg
        className='w-16 h-16 text-success-500 dark:text-success-400 mx-auto mb-4'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M5 13l4 4L19 7'
        />
      </svg>
      <h3 className='text-xl font-bold text-success-700 dark:text-success-300 mb-2'>
        Message Sent!
      </h3>
      <p className='text-success-600 dark:text-success-400'>
        Thank you for reaching out. We'll get back to you soon!
      </p>
    </div>
  );
}

export function ErrorMessage({ error }: { error?: string }) {
  // Map technical errors to user-friendly messages
  const getUserFriendlyMessage = (err?: string) => {
    if (!err) return "Failed to send message. Please try again.";

    if (err.includes("offline") || err.includes("internet connection")) {
      return "You appear to be offline. Please check your internet connection and try again.";
    }

    if (
      err.includes("Unable to fetch data") ||
      err.includes("could not be resolved")
    ) {
      return "Unable to send email. Please check your connection and try again.";
    }

    if (err.includes("Invalid form data")) {
      return "Please check your form and try again.";
    }

    // Return original error for everything else
    return err;
  };

  return (
    <div className='bg-error-50 dark:bg-error-900/20 border border-error-200 dark:border-error-700 rounded-lg p-4'>
      <div className='flex items-start'>
        <svg
          className='w-5 h-5 text-error-500 dark:text-error-400 mr-3 mt-0.5 shrink-0'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
        <p className='text-error-600 dark:text-error-400 text-sm'>
          {getUserFriendlyMessage(error)}
        </p>
      </div>
    </div>
  );
}
