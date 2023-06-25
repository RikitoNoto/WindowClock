
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

  public static hourToDeg(hour: number, minute: number, sec: number, base = 360): number{
    return hour / 12 * base + TimeUtil.minuteToDeg(minute, sec, base * 1/12);
  }

  public static minuteToDeg(minute: number, sec: number, base = 360): number{
    return minute / 60 * base + TimeUtil.secToDeg(sec, base * 1/60);

  }

  public static secToDeg(sec: number, base = 360): number{
    return sec / 60 * base;

  }
}
