import Button from "../button";
import Container from "../container";
import Icon from "../icon";
import Input from "../input";

export default function ExhangeRate() {
  return (
    <form className="transparent-white rounded-2xl">
      <div className="p-8">
        <div className="grid gap-8">
          <div className="grid gap-4">
            <Input label="send" />
            <Input label="receive" />
          </div>

          {/* Details */}
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <Icon icon="stock" size={14} />
              <span className="text-sm">
                Conversion rate ISK 1 = <strong>GBP 0.005444</strong>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Icon icon="star" size={14} />
              <span className="text-sm">
                <strong>No fee</strong> for your first transfer
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Icon icon="timer" size={14} />
              <span className="text-sm">Arrives instantly</span>
            </div>
          </div>

          {/* Button */}
          <Button label="get started" size="lg" type="submit" />
        </div>
      </div>
    </form>
  );
}
