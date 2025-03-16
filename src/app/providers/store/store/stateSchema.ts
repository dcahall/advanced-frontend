import { type CounterSchema } from "@/entities/counter"
import { type UserSchema } from "@/entities/user"
import { type LoginSchema } from "@/features/authByUsername"

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    loginForm?: LoginSchema
}
