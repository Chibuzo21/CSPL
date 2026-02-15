import { FieldErrors } from "react-hook-form";
import { forwardRef, InputHTMLAttributes } from "react";
import { FormData } from "./validation";
import { styles } from "@/lib/utils";
interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  field: keyof FormData;
  type?: "text" | "textarea" | "select";
  options?: string[];
  errors: FieldErrors<FormData>;
}

const Field = forwardRef<HTMLInputElement, FieldProps>(
  (
    { field, errors, className, type = "text", options, ...inputProps },
    ref,
  ) => {
    const error = errors[field];
    const hasError = !!error;

    return (
      <div>
        <label htmlFor={field} className={styles.label}>
          {field} *
        </label>

        {type === "textarea" && (
          <textarea
            id={field}
            {...(inputProps as any)}
            ref={ref as any}
            rows={6}
            className={`
              ${styles.default} 
              ${hasError ? "border-error-500 focus:ring-error-500 dark:border-error-400" : ""} 
              ${className}
            `}
          />
        )}

        {type === "text" && (
          <input
            id={field}
            ref={ref}
            {...inputProps}
            className={`
              ${styles.default} 
              ${hasError ? "border-error-500 focus:ring-error-500 dark:border-error-400" : ""} 
              ${className}
            `}
          />
        )}

        {type === "select" && (
          <select
            {...(inputProps as any)}
            ref={ref as any}
            className={`
              ${styles.default}
              ${hasError ? "border-error-500 focus:ring-error-500 dark:border-error-400" : ""}
            `}>
            <option value=''>Select a subject</option>
            {options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}

        {error && <p className={styles.error}>{error.message}</p>}
      </div>
    );
  },
);

Field.displayName = "Field";

export default Field;
