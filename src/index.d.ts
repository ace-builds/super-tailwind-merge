import { ArgumentArray } from "classnames";

declare module 'super-tailwind-merge' {


    function superTwMerge(...args: ArgumentArray): string;

    export default superTwMerge;
}