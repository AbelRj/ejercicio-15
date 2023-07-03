export function Alert({ message, color }) {
  <style>
</style>
    return (
      
      <div className={`mt-2 alert alert-${color}`} style={{ width: '500px' }} role="alert">
        {message}
      </div>
    );
  }