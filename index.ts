import Ajv from 'ajv'
import addFormats from 'ajv-formats'

// インスタンスを作成
const ajv = new Ajv();
addFormats(ajv)

// 検証スキーマを定義する
const schema = {
    required: ['name', 'email'],
    type: 'object',
    properties: {
        name: {
            type: 'string',
        },
        email: {
            type: 'string',
            format: 'email',
            maxLength: 50,
        },
        age: {
            type: 'integer'
        }
    }
}

// 検証データを定義する
const data = {
    name: '田中太郎',
    email: 'test',
    age: 26
}

// バリデーション関数を作成する
const validate = ajv.compile(schema);

// バリデーションを実行
const valid = validate(data)

if (!valid) {
    // バリデーションエラー
    console.log(validate.errors)
}