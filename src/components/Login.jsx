import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
    // console.log(data.email);
    // console.log(data.password);

    const article = {
      email: data.email,
      password: data.password,
    };
    axios
      .post("http://localhost:8080/api/login", article) // {
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("email")} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("password", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <p>This field is required</p>}

      <input type="submit" />
    </form>
  );
};

export default Login;
