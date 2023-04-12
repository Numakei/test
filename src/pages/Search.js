import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonInput,
  IonChip,
  IonButtons,
  IonDatetime,
  IonPicker,
} from "@ionic/react";
import "./Search.css";

import { calendar, calendarOutline, menu, notifications } from "ionicons/icons";

import { useState } from "react";

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="Header">
          <IonTitle className="ionTitle">検索</IonTitle>
          <IonButton color="test" fill="none" slot="start">
            <IonIcon slot="icon-only" size="large" icon={menu}></IonIcon>
          </IonButton>
          <IonButton color="test" fill="none" slot="end">
            <IonIcon
              slot="icon-only"
              size="large"
              icon={notifications}
            ></IonIcon>
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          {/* モーダルつける datetime*/}
          <IonIcon icon={calendarOutline}></IonIcon>
        </IonItem>
        <IonItem>
          <div>場所</div>
          <IonButton onClick={() => setIsOpen(true)}>選択する</IonButton>
          <IonPicker
            isOpen={isOpen}
            onDidDismiss={() => setIsOpen(false)}
            columns={[
              {
                name: "place",
                options: [
                  {
                    text: "世田谷区",
                    value: "Setagaya",
                  },
                  {
                    text: "練馬区",
                    value: "Nerima",
                  },
                  {
                    text: "大田区",
                    value: "Oota",
                  },
                  {
                    text: "足立区",
                    value: "Adachi",
                  },
                  {
                    text: "江戸川区",
                    value: "Edogawa",
                  },
                  {
                    text: "杉並区",
                    value: "Suginami",
                  },
                  {
                    text: "板橋区",
                    value: "Itabashi",
                  },
                  {
                    text: "江東区",
                    value: "Koto",
                  },
                  {
                    text: "葛飾区",
                    value: "Katsushika",
                  },
                  {
                    text: "品川区",
                    value: "Shinagawa",
                  },
                  {
                    text: "北区",
                    value: "Kita",
                  },
                  {
                    text: "新宿区",
                    value: "Shinjuku",
                  },
                  {
                    text: "中野区",
                    value: "Nakano",
                  },
                  {
                    text: "豊島区",
                    value: "Toshima",
                  },
                  {
                    text: "目黒区",
                    value: "Meguro",
                  },
                  {
                    text: "墨田区",
                    value: "Sumida",
                  },
                  {
                    text: "港区",
                    value: "Minato",
                  },
                  {
                    text: "文京区",
                    value: "Bunkyo",
                  },
                  {
                    text: "渋谷区",
                    value: "Shibuya",
                  },
                  {
                    text: "荒川区",
                    value: "Arakawa",
                  },
                  {
                    text: "台東区",
                    value: "Taito",
                  },
                  {
                    text: "中央区",
                    value: "Chuo",
                  },
                  {
                    text: "千代田区",
                    value: "Chiyoda",
                  },
                ],
              },
            ]}
            buttons={[
              {
                text: "戻る",
                role: "cancel",
              },
              {
                text: "決定",
                handler: (value) => {
                  window.alert(`You selected: ${value.languages.value}`);
                },
              },
            ]}
          ></IonPicker>
          <IonInput></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>タイトル</IonLabel>
          <IonInput></IonInput>
        </IonItem>
        <IonItem>
          <div>値段</div>
          <IonButton onClick={() => setIsOpen(true)}>選択する</IonButton>
          <IonPicker
            isOpen={isOpen}
            onDidDismiss={() => setIsOpen(false)}
            columns={[
              {
                name: "place",
                options: [
                  {
                    text: "〜2000円",
                    value: "U2000",
                  },
                  {
                    text: "〜4000円",
                    value: "U4000",
                  },
                  {
                    text: "〜6000円",
                    value: "U6000",
                  },
                  {
                    text: "〜8000円",
                    value: "U8000",
                  },
                  {
                    text: "〜10000円",
                    value: "U10000",
                  },
                ],
              },
            ]}
            buttons={[
              {
                text: "戻る",
                role: "cancel",
              },
              {
                text: "決定",
                handler: (value) => {
                  window.alert(`You selected: ${value.languages.value}`);
                },
              },
            ]}
          ></IonPicker>
          <IonInput></IonInput>
        </IonItem>
        <IonChip>飲み会</IonChip>
        <IonChip>趣味・カルチャー</IonChip>
        <IonChip>スポーツ・フィットネス</IonChip>
        <IonChip>遊園地・テーマパーク・公園</IonChip>
        <IonChip>初心者歓迎</IonChip>
        <IonButton>クリア</IonButton>
        <IonButton>検索</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Search;
