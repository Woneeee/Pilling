import { useForm } from "react-hook-form";

export const SearchProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  return <div>SearchProduct</div>;
};
