import classNames, { ArgumentArray } from 'classnames'
import { twMerge, } from 'tailwind-merge'

const superTwMerge = (...args: ArgumentArray): string => {
    return twMerge(classNames(...args));
}

export default superTwMerge;
module.exports = superTwMerge;