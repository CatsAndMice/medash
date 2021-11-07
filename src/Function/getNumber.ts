export default (min: number, max: number): number | void => {
    return max > min ? Math.round((Math.random() * (max - min)) + min) : console.warn('max值小于min,参数不合法!')
}

