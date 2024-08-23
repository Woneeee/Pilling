import { useForm } from "react-hook-form";

export const SearchFunction = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  return <div>SearchFunction</div>;
};
