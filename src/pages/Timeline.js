import {
  IonContent,
  IonHeader,
  IonIcon,
  IonCard,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonAvatar,
  IonFab,
  IonFabButton,
  IonModal,
  IonButton,
  IonItem,
  IonChip,
  IonPicker,
  IonInput,
  IonLabel,
} from "@ionic/react";

import "./Timeline.css";

import { useState } from "react";

import {
  addOutline,
  menu,
  notifications,
  calendarOutline,
} from "ionicons/icons";

const Timeline = () => {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="Header">
          <IonTitle className="ionTitle">タイムライン</IonTitle>
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
        <div>
          <IonList>
            <IonCard className="card">
              <IonCardHeader className="cardHeader">
                <div className="person">
                  <div className="titles">
                    <IonCardTitle className="title">何</IonCardTitle>
                    <IonCardSubtitle className="subtitle">
                      <div className="date">日時</div>
                      <div className="price">値段</div>
                    </IonCardSubtitle>
                    <IonCardSubtitle className="subtitle">
                      <div className="place">場所</div>
                    </IonCardSubtitle>
                    <div className="avatar">
                      <IonAvatar>
                        <img src="https://ionicframework.com/docs/img/demos/avatar.svg"></img>
                      </IonAvatar>
                      <IonAvatar className="small">
                        <img src="https://ionicframework.com/docs/img/demos/avatar.svg"></img>
                      </IonAvatar>
                      <div>現在何人</div>
                    </div>
                  </div>
                </div>
              </IonCardHeader>
            </IonCard>
          </IonList>
        </div>
        <IonFab vertical="bottom" horizontal="end" slot="fixed" id={"test"}>
          <IonFabButton onClick={() => setShowModal(true)}>
            <IonIcon icon={addOutline} size="20px" />
          </IonFabButton>
        </IonFab>
        <IonModal isOpen={showModal}>
          <IonHeader>
            <IonToolbar className="Header">
              <IonTitle>追加</IonTitle>
              <IonButton
                onClick={() => {
                  setShowModal(false);
                }}
              >
                戻る
              </IonButton>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonItem>
              <IonLabel>タイトル</IonLabel>
              <IonInput></IonInput>
            </IonItem>
            <IonItem>
              {/* モーダルつける datetime*/}
              <IonIcon icon={calendarOutline}></IonIcon>
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

            <IonChip>飲み会</IonChip>
            <IonChip>趣味・カルチャー</IonChip>
            <IonChip>スポーツ・フィットネス</IonChip>
            <IonChip>遊園地・テーマパーク・公園</IonChip>
            <IonChip>初心者歓迎</IonChip>
            <IonButton>クリア</IonButton>
            <IonButton>検索</IonButton>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Timeline;
