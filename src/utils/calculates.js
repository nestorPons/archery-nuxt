export const calculeCarbonRecurveSpine = async (spanCm, power) => {
    const {
        data
    } = await useFetch('/api/dataCarbonRecurveSpine')
    const carbonSpines = data.value
    const spanInches = (parseFloat(spanCm) / 2.54).toFixed(0)
    console.log(spanCm)
    console.log(spanInches)
    carbonSpines.forEach(element => {


        //console.log(element["21"])
    });


    return true
};