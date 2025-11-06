# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

Name										Score				
1. บริษัทมีนโยบายให้พนักงานปฏิบัติตามระเบียบด้านความปลอดภัยของระบบสารสนเทศเพื่ออะไร
ก. เพื่อความสะดวกในการทำงาน
ข. เพื่อรักษาความปลอดภัยของข้อมูลและทรัพย์สินของบริษัท
ค. เพื่อให้พนักงานสามารถใช้อุปกรณ์ได้อย่างอิสระ
ง. เพื่อความรวดเร็วในการสื่อสาร
2. เมื่อพนักงานออกจากเครื่องคอมพิวเตอร์ ต้องทำการล็อกหน้าจอทุกครั้ง เพื่อป้องกันอะไร
ก. ป้องกันไวรัส
ข. ป้องกันการเข้าถึงข้อมูลโดยไม่ได้รับอนุญาต
ค. ป้องกันเครื่องดับ
ง. ป้องกันการค้างของระบบ
3.การเชื่อมต่ออินเทอร์เน็ตจากภายนอกบริษัทจะต้องผ่านระบบอะไร
ก. Proxy                                                               ข. Bluetooth
ค. SSL-VPN ของบริษัท                                       ง. Internet Explorer
4. การยืมอุปกรณ์ไอทีออกนอกบริษัทจะต้องดำเนินการผ่านระบบใด
ก. ERP                      ข. E-Service                    ค. SAP                      ง. E-PPE
5. ข้อใด “ไม่ใช่” การปฏิบัติตามมาตรการความปลอดภัยของข้อมูล
ก. ไม่เปิดเผยรหัสผ่านให้ผู้อื่น
ข. เข้าระบบด้วยบัญชีผู้ใช้ของตนเอง
ค. แชร์บัญชีผู้ใช้ร่วมกับเพื่อนเพื่อความสะดวก
ง. เปลี่ยนรหัสผ่านอย่างสม่ำเสมอ
6. ข้อใดถูกต้องเกี่ยวกับการจัดเก็บข้อมูลของบริษัท
ก. เก็บไว้ในแฟลชไดรฟ์ส่วนตัวได้                                                  ข. เก็บไว้ในโทรศัพท์มือถือได้
ค. ต้องเก็บไว้ในพื้นที่ที่บริษัทกำหนด เช่น S: Drive                        ง. เก็บไว้ในอีเมลส่วนตัวได้
7. ข้อใดถูกต้องเกี่ยวกับการใช้งานอีเมลของบริษัท
ก. ใช้สมัครเว็บไซต์ทั่วไปได้
ข. ใช้อีเมลของบริษัทเพื่อการติดต่อสื่อสารเกี่ยวกับงานเท่านั้น
ค. ใช้ส่งต่อข้อมูลส่วนตัวได้
ง. ใช้ติดต่อเพื่อนในเวลาพักได้

ให้เติมเครื่องหมาย ✓ ในข้อที่ถูกต้อง และเติม ✗ ในข้อที่ผิด
______ 8. ข้อมูลที่เก็บอยู่ใน USB หรือ External Hard Disk ของบริษัท ต้องได้รับการเข้ารหัสข้อมูลก่อนนำไปใช้งานทุกครั้ง
______ 9. พนักงานสามารถใช้อินเทอร์เน็ตเพื่อดูเว็บไซต์ส่วนตัวได้หากไม่กระทบกับงาน
______ 10. พนักงานต้องยื่นคำร้องขอยืมอุปกรณ์ผ่านระบบ E-Service ล่วงหน้าไม่น้อยกว่า 3 วันทำการ
