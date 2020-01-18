declare function timeLongFormatter(pattern: any, formatLong: any): any;
declare function dateTimeLongFormatter(pattern: any, formatLong: any): any;
declare var longFormatters: {
    p: typeof timeLongFormatter;
    P: typeof dateTimeLongFormatter;
};
export default longFormatters;
//# sourceMappingURL=longFormatters.d.ts.map