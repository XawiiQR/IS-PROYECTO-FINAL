import { error, fail, redirect } from "@sveltejs/kit";
import { serialize } from "object-to-formdata";
// import { createProjectSchema } from "$lib/schemas";
// import { validateData } from "$lib/utils";

export const load = ({ locals }) => {
  if (!locals.pb.authStore.isValid) {
    throw redirect(303, "/auth/login");
  }
};

export const actions = {
  new: async ({ request, locals }) => {
    const formData = Object.fromEntries([...(await request.formData())]);
    // const body = await request.formData();
    console.log("body:", formData);
    // body.append("user", locals.user.id);

    // const { formData, errors } = await validateData(body, createProjectSchema);
    // const { thumbnail, ...rest } = formData;

    // if (errors) {
    //   return fail(400, {
    //     data: rest,
    //     errors: errors.fieldErrors,
    //   });
    // }

    try {
      await locals.pb
        .collection("eventos")
        .create(serialize({ ...formData, organizador: locals.user.id }));
      console.log("formData:");
    } catch (err) {
      console.log("Error: ", err);
      throw error(err.status, err.message);
    }

    throw redirect(303, "/");
  },
};
