import { entity, field } from "@herbsjs/gotu"

export const User = entity('User', {
    name: field(String, {
        validation: {
            presence: true
        }
    }),
    age: field(String, {
        validation: {
            presence: true,
        }
    }),
    city: field(String, {
        validation: {
            presence: true
        }
    }),
    street: field(String, {
        validation: {
            presence: true
        }
    }),
})