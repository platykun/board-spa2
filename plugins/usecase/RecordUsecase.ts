import {addRecord} from "~/plugins/gateway/record/RecordGateway";
import {RecordDto} from "~/plugins/gateway/record/RecordDto";

export class RecordUsecase {

  static record(recordDto: RecordDto) {
    addRecord(recordDto);
  }

}
