import { Card } from "~/components/Card/Card";
import { Checkbox } from "~/components/Checkbox/Checkbox";
import { IconButton } from "~/components/IconButton/IconButton";
import { DeleteIcon } from "~/components/Icons/DeleteIcon";
import { useState, useRef, useEffect } from "react";

export interface IToDoEntity {
    id: string;
    label?: string;
    status?: boolean;
}

export type TToDoItem = {
    item: IToDoEntity;
    onChangeItem: (todoItem: IToDoEntity) => void;
    onSaveItem: (todoItem: IToDoEntity) => void;
    onRemoveItem: (itemId: string) => void;
};

export const ToDoItem = ({
                             item,
                             onChangeItem,
                             onSaveItem,
                             onRemoveItem,
                         }: TToDoItem) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isChanged, setIsChanged] = useState(false);

    // Отслеживаем изменение фокуса на уровне всей карточки
    useEffect(() => {
        const handler = (event: FocusEvent) => {
            if (cardRef.current && !cardRef.current.contains(event.relatedTarget as Node)) {
                if (isChanged) {
                    onSaveItem(item);
                    setIsChanged(false);
                }
            }
        };

        document.addEventListener("focusout", handler);
        return () => document.removeEventListener("focusout", handler);
    });

    const handleChangeStatus = (isChecked: boolean) => {
        const newTodoItem = { ...item, status: isChecked };
        setIsChanged(true);
        onChangeItem(newTodoItem);
        onSaveItem(newTodoItem);
    };

    const handleChangeLabel = (newLabel: string) => {
        const newTodoItem = { ...item, label: newLabel };
        setIsChanged(true);
        onChangeItem(newTodoItem);

    };

    return (
        <Card
            ref={cardRef}
            key={item.id}
            style={{ justifyContent: "space-between" }}
        >
            <Checkbox
                label={item.label}
                checked={item.status}
                onChangeStatus={handleChangeStatus}
                onChangeLabel={handleChangeLabel}
            />
            <div style={{ display: "flex", gap: "10px" }}>
                <IconButton
                    icon={<DeleteIcon size="small" />}
                    onClick={() => onRemoveItem(item.id)}
                ></IconButton>
            </div>
        </Card>
    );
};