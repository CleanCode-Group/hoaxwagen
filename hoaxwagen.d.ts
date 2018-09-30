declare module "hoaxwagen" {
    /** This function checks if Volkswagen library exists in node_modules. */
    export function isFraud(): boolean;

    /** This function shows an alert if check() returns true. */
    export function monitor(): void;

    export interface IPackage {
        name:    string;
        version: string;
        yarn:    string;
        path:    string;
    }

    /** This function returns a list of packages that uses Volkswagen */
    export function getPackages(): IPackage[];
}