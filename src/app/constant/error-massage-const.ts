export class ErrorMessage {
  static readonly REQUIRED_EMAIL = 'メールアドレスは必須です'
  static readonly FORMAT_EMAIL = 'メールアドレスの形式で入力してください'
  static readonly REQUIRED_PASSWORD = 'パスワードは必須です'
  static readonly MIN_LENGTH = {
    template: (num: number)=> {
      return `最小は${num}文字です`
    }
  }
}
