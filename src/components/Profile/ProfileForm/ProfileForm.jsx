import Styles from "./ProfileForm.module.css";
import { useForm } from "react-hook-form";

const ProfileForm = ({
  form,
  setForm,
  onSave,
  userImageForMobile,
  setShowAlert,
  setUserImageForMobile,
  formValidate,
  setFormValidate,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      picture: userImageForMobile,
    };
    onSave(userData);
    setFormValidate(true);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={Styles.form}>
        <div className={Styles.container}>
          <div className={Styles.main}>
            {/* FirstName */}
            <div className={Styles.all_input}>
              <div className={Styles.firstName_input_box}>
                <label htmlFor="firstName" className={Styles.label}>
                  First Name*
                </label>
                <div className={Styles.firstName_input_content}>
                  <input
                    type="text"
                    placeholder="John"
                    value={form.firstName}
                    maxLength={15}
                    {...register("firstName", {
                      required: {
                        value: true,
                        message: "Can’t be empty",
                      },
                    })}
                    onChange={handleChange}
                    className={Styles.input}
                  />
                  <p className={Styles.error_message}>
                    {errors.firstName?.message}
                  </p>
                </div>
              </div>
              {/* LastName */}
              <div className={Styles.lastName_input_box}>
                <label htmlFor="lastName" className={Styles.label}>
                  Last name*
                </label>
                <div className={Styles.lastName_input_content}>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Appleseed"
                    maxLength={17}
                    className={Styles.input}
                    value={form.lastName}
                    {...register("lastName", {
                      required: {
                        value: true,
                        message: "Can’t be empty",
                      },
                    })}
                    onChange={handleChange}
                  />
                  <p className={Styles.error_message}>
                    {errors.lastName?.message}
                  </p>
                </div>
              </div>
              {/* Email */}
              <div className={Styles.email_input_box}>
                <label className={Styles.label}>Email</label>
                <div className={Styles.email_input_content}>
                  <input
                    type="text"
                    name="email"
                    value={form.email}
                    maxLength={37}
                    placeholder="email@example.com"
                    className={Styles.input}
                    {...register("email", {})}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.btn}>
          <button
            className={Styles.save_button}
            onClick={() => {
              setShowAlert(true);
              setTimeout(() => {
                setShowAlert(false);
              }, 5000);
            }}
            // onSubmit={handleSubmit(onSubmit)}
            onSubmit={handleSubmit(onSubmit)}
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default ProfileForm;
