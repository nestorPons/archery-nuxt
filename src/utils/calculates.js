export const calculeCarbonRecurveSpine = async () => {
    let spineRecurveCarbon = await fetchCSVData('../storage/carbonRecurveSpine.csv')


    return spineRecurveCarbon
};