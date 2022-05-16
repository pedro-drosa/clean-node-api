export class SignUpController {
  handle (httpRequest: any): any {
    if (!httpRequest.body.name) {
      return {
        statuscode: 400,
        body: new Error('Missing Param: name')
      }
    }

    if (!httpRequest.body.email) {
      return {
        statuscode: 400,
        body: new Error('Missing Param: email')
      }
    }
  }
}
