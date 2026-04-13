//! Start by creating the variables for the data recorded
const day1tempF = 32;
const day2tempC = 25;
const day3tempF = 70;
const day4tempC = 18;
const day5tempF = 80;
const day6tempC = 15;
const day7tempF = 72;
const day8tempC = 28;
const day9tempF = 68;
const day10tempC = 20;
const day11tempF = 75;
const day12tempC = 23;
const day13tempF = 82;
const day14tempC = 30;
const day15tempF = 65;
const day16tempC = 22;
const day17tempF = 77;
const day18tempC = 26;
const day19tempF = 78;
const day20tempC = 24;
const day21tempF = 73;
const day22tempC = 21;
const day23tempF = 79;
const day24tempC = 27;
const day25tempF = 71;
const day26tempC = 19;
const day27tempF = 74;
const day28tempC = 17;
const day29tempF = 76;
const day30tempC = 29;

//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)
const day1C = (day1tempF - 32) * 5 / 9;
const day3C = (day3tempF - 32) * 5 / 9;
const day5C = (day5tempF - 32) * 5 / 9;
const day7C = (day7tempF - 32) * 5 / 9;
const day9C = (day9tempF - 32) * 5 / 9;
const day11C = (day11tempF - 32) * 5 / 9;
const day13C = (day13tempF - 32) * 5 / 9;
const day15C = (day15tempF - 32) * 5 / 9;
const day17C = (day17tempF - 32) * 5 / 9;
const day19C = (day19tempF - 32) * 5 / 9;   
const day21C = (day21tempF - 32) * 5 / 9;
const day23C = (day23tempF - 32) * 5 / 9;
const day25C = (day25tempF - 32) * 5 / 9;
const day27C = (day27tempF - 32) * 5 / 9;
const day29C = (day29tempF - 32) * 5 / 9;

const day2F = (day2tempC * 9 / 5) + 32;
const day4F = (day4tempC * 9 / 5) + 32;
const day6F = (day6tempC * 9 / 5) + 32;
const day8F = (day8tempC * 9 / 5) + 32;
const day10F = (day10tempC * 9 / 5) + 32;
const day12F = (day12tempC * 9 / 5) + 32;
const day14F = (day14tempC * 9 / 5) + 32;
const day16F = (day16tempC * 9 / 5) + 32;
const day18F = (day18tempC * 9 / 5) + 32;
const day20F = (day20tempC * 9 / 5) + 32;
const day22F = (day22tempC * 9 / 5) + 32;
const day24F = (day24tempC * 9 / 5) + 32;
const day26F = (day26tempC * 9 / 5) + 32;
const day28F = (day28tempC * 9 / 5) + 32;
const day30F = (day30tempC * 9 / 5) + 32;


//! Start the calculation of the total temperatures
const tot_temperature_in_fahrenheit = day1tempF + day3tempF + day5tempF + day7tempF + day9tempF + day11tempF + day13tempF + day15tempF + day17tempF + day19tempF + day21tempF + day23tempF + day25tempF + day27tempF + day29tempF + day2F + day4F + day6F + day8F + day10F + day12F + day14F + day16F + day18F + day20F + day22F + day24F + day26F + day28F + day30F;
const tot_temperature_in_celsius = day1C + day3C + day5C + day7C + day9C + day11C + day13C + day15C + day17C + day19C +	day21C +	day23C +	day25C +	day27C +	day29C +	day2tempC +	day4tempC +	day6tempC +	day8tempC +	day10tempC +	day12tempC +	day14tempC +	day16tempC +	day18tempC +	day20tempC +	day22tempC +	day24tempC +
    day26tempC +
    day28tempC +
    day30tempC;

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius
const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;
const avg_temperature_in_celsius = tot_temperature_in_celsius / 30;
//! Console.log the results for your own inspection if you'd like
console.log("Total temperature in Fahrenheit:", tot_temperature_in_fahrenheit);
console.log("Total temperature in Celsius:", tot_temperature_in_celsius);
console.log("Average temperature in Fahrenheit:", avg_temperature_in_fahrenheit);
console.log("Average temperature in Celsius:", avg_temperature_in_celsius);
//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    // tot_temperature_in_fahrenheit,
    tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius,
    avg_temperature_in_celsius
    
};