declare module "hoaxwagen" {
    /** This function checks if Volkswagen library exists in node_modules. */
    export function check(): boolean;

    /** This function shows an alert if check() returns true. */
    export function monitor(): any;
}