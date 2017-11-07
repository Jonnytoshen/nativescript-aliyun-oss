import { Observable } from 'tns-core-modules/data/observable';
import { AliyunOss } from 'nativescript-aliyun-oss';

export class HelloWorldModel extends Observable {
  public message: string;
  private aliyunOss: AliyunOss;

  constructor() {
    super();

    this.aliyunOss = new AliyunOss();
    this.message = this.aliyunOss.message;
  }
}
