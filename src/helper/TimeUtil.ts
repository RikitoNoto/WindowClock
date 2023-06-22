
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

  public static hourToDeg(hour: number): number{
    return hour / 12 * 360;
  }

  public static minuteToDeg(minute: number): number{
    return minute / 60 * 360;

  }

  public static secToDeg(sec: number): number{
    return sec / 60 * 360;

  }
}
