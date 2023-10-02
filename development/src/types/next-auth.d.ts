
declare module "next-auth" {
    interface User {
        name: string,
        pseudo: string
    }

    interface Session {
        user: User & {
            name: string,
            pseudo: string
        }
        token: {
            name: string,
            pseudo: string
        }
    }
}