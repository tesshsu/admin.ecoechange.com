import React, { useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import { Form, Field } from 'react-final-form';
import Auth from "layouts/Auth.js";
import { FORM_ERROR } from 'final-form';
import useLoggedUser from 'service/hooks/useLoggedUser';
import Alert from 'components/Alerts/Alert';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const required = value => (value ? undefined : 'Champs obligatoires')
const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)

export default function Login() {
  const {
    login,
    isAuthentificated,
    loggedUser
  } = useLoggedUser();

  useEffect(() => {
    if (isAuthentificated && loggedUser) {
      Router.push("/admin/dashboard");
    }
  }, [isAuthentificated, loggedUser]);

  return (
    <>
      <div className="container mx-auto px-4 mt-16 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-gray-600 text-sm font-bold">
                    Connexion Ecoechange backOffice
                  </h6>
                </div>
                <hr className="mt-6 border-b-1 border-gray-400" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-gray-500 text-center mb-3 font-bold">
                  <small>Se connecter avec </small>
                </div>
                 <Form
					  initialValues={{
						email: '',
						password: ''
					  }}
					  onSubmit={async ({ email, password }) => {
						await sleep(300)
							try {
							  await login(
								email.trim(),
								password.trim()
							  );
						    Router.push("/admin/dashboard");
						} catch (err) {
						  alert("Identifiants incorrects!");
						}
					  }}
					  render={({ submitError, handleSubmit, form, submitting, pristine, values, invalid
					  }) => (
						<form onSubmit={handleSubmit}>
						  <Field name="email" validate={required}>
							    {({ input, meta }) => (
								  <div className="relative w-full mb-3">
									<label
									  className="block uppercase text-gray-700 text-xs font-bold mb-2"
									  htmlFor="email"
									>
									  Email
									</label>
									<input
									  {...input}
									  type="email"
									  value= {values.email}
									  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
									  placeholder="Email"
									/>
									{(meta.error || meta.submitError ) && meta.touched && (
									  <span className="text-orange-500 text-sm">{meta.error || meta.submitError}</span>
									)}
								  </div>
								)}
                            </Field>

						  <Field name="password" validate={required}>
							    {({ input, meta }) => (
								  <div className="relative w-full mb-3">
									<label
									  className="block uppercase text-gray-700 text-xs font-bold mb-2"
									  htmlFor="password"
									>
									  Mot de passe
									</label>
									<input
									  {...input}
									  type="password"
									  value= {values.password}
									  className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
									  placeholder="Mot de passe"
									/>
									{(meta.error || meta.submitError ) && meta.touched && (
									  <span className="text-orange-500 text-sm">{meta.error || meta.submitError}</span>
									)}
								  </div>
								)}
                            </Field>

							<div className="text-center mt-6">
							<button
							  className="bg-green-500 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
							  type="submit"
							  disabled={submitting || invalid}
							>
							  Connexion
							</button>
						  </div>
                          {submitError || invalid && (
							 <Alert text="identifian incorrects" />
						  )}
						</form>
					)}
				/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


Login.layout = Auth;
