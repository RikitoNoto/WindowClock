
export default class TimeUtil {
  public static numToDigArray(num: number): number[]{
    let num_str: string;
    if(num < 10){
      num_str = `0${num}`;
    }
    else{
      num_str = `${num}`;
    }

    const num_array = [...num_str];
    return num_array.slice(-2).map((value, _, __)=>{
      return Number(value);
    });
  }
}
