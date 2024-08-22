import { useForm } from "react-hook-form";

export const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  return <div>Search</div>;
};
