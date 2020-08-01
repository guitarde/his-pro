export class UserLogin {
    constructor(
        public email: string,
        public password: string,
        public username?: string,
        public role?: string
    ) { }
}